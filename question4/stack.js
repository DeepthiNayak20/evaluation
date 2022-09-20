function stackFunction() {
    class Stack {
        constructor() {
            this.items = [];
        }

        top() {
            return this.items[this.items.length - 1];
        }

        add(ele) {
            return this.items.push(ele);
        }

        remove() {
            if (this.items.length > 0) {
                return this.items.pop();
            }
        }

        isEmpty() {
            return this.items.length == 0;
        }

        size() {
            return this.items.length;
        }
    }

    let stack = new Stack();
    stack.add(1);
    stack.add(2);
    stack.add(3);
    stack.add(4);
    stack.add(5);
    
    console.log("stack items",stack.items);

    stack.remove();
    this.items = [5];
    console.log("stack items after pop",stack.items);

    console.log("Top stack item:",stack.top());

    console.log("stack is empty:",stack.isEmpty());

    console.log("stack size:",stack.size());

    const removeOdd = (odd) => {
        for (let j = 0; j < stack.size(); j++) {
            if (odd[j] % 2 === 1) {
                odd.splice(j, 1)
                break;
            };
        };
        return odd;
    }
    
    oddItem = removeOdd(stack.items)
    console.log(oddItem);

    const duplicateStack = (myStack) => {
        let duplicate = new Stack();
        for (let i = 0; i < stack.size(); i++) {
            duplicate.add(myStack[i]);
        }
        return duplicate;
    }
    oddItem = duplicateStack(stack.items)
    console.log("duplicate:",oddItem);
}