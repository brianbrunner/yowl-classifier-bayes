/**
 * Pizza Ordering Example Data
 *
 * Note that this is probably too sparse to be a real-world model.
 * This is just an example of the format for training data.
 */

module.exports = [

  // Order a pizza
  ["Hey, can I get a pizza?", "make_order"],
  ["I'd like a pizza please", "make_order"],
  ["Send me a pizza", "make_order"],

  // Check on pizza order
  ["What's the status of my pizza?", "order_status"],
  ["When is my pizza going to get here?", "order_status"],
  ["I want my pizza!", "order_status"],

  // Get pizza ordering stats
  ["How many pizzas have I ordered?", "pizza_stats"],
  ["When was the last time I ordered?", "pizza_stats"],
  ["How much have I spent on pizza?", "pizza_stats"]

];
