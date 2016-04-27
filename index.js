var _ = require('lodash');
var natural = require('natural');

module.exports = function(options) {
  var classifier = new natural.BayesClassifier();

  var classification_key = (typeof options.classification_key !== "undefined") ? options.classification_key : "classification";
  var training = options.training;

  // TODO allow loading a classifier from a JSON file
  if (Array.isArray(training)) {
    training.forEach(function(example) {
      classifier.addDocument(example[0], example[1]);
    });
  } else {
    throw new Error("options.training must be an array of ['training example', 'classification'] pairs");
  }

  classifier.train();

  /**
   * augment the classify function so we don't automatically pick 
   * the classification with the most training examples
   */
  var neutralResult = classifier.getClassifications("");
  classifier._classify = classifier.classify;
  classifier.classify = function(text) {
    var classifications = this.getClassifications(text);
    if (_.isEqual(classifications, neutralResult)) {
      return null;
    } else {
      return classifications[0].label;
    }
  };

  return function(context, event, next) {
    context[classification_key] = classifier.classify(event.message);
    next();
  };

};
