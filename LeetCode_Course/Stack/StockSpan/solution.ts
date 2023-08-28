// Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

// The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

// For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
// Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less


// Implement the StockSpanner class:

// StockSpanner() Initializes the object of the class.
// int next(int price) Returns the span of the stock's price given that today's price is price.

class StockSpanner {

    prices:number[];
    days:number[];
    currentDay:number = 0
    constructor() {
        this.prices = [];
        this.days = [];
        this.currentDay = 0

    }

    next(price: number): number {

        while(this.prices && this.prices[this.prices.length -1 ] <= price) {
            this.prices.pop();
            this.days.pop();

        }

        let span: number;
        if(!this.prices.length){
            span = this.currentDay + 1;
        } else {
            span = this.currentDay - this.days[this.days.length -1];
        }
          
        this.prices.push(price);
        this.days.push(this.currentDay);
        this.currentDay++;

        return span;
    }
}

let stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
console.log(stockSpanner.next(85));  // return 6