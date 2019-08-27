
// Data Module
var budgetController = (function () {

    var Expense = function (id, description, value) { // Function Constructor
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function (id, description, value) { // Function Constructor
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            expense: 0,
            income: 0
        },
        budget: 0,
        percentage: -1
    }

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (current) {
            sum += current.value;
        })

        data.totals[type] = sum;

    }
    return {
        addItem: function (type, desc, val) {
            var ID, newItem;

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            console.log(ID);

            // Create new iten based on income or expense
            if (type == 'income') {
                newItem = new Income(ID, desc, val);
            } else if (type == 'expense') {
                newItem = new Expense(ID, desc, val);
            }

            // Push it into Data structure
            data.allItems[type].push(newItem);

            //  return the newItem
            return newItem;
        },

        getValue: function () {
            console.log(data);
        },

        calculateBudget: function () {
            // Calculate total income and expenses
            calculateTotal('expense');
            calculateTotal('income');

            // Calculate the budget income ~ expenses
            data.budget = data.totals.income - data.totals.expense;

            // Calculate the percenrtage of income that we spent
            if (data.totals.income > 0) {
                data.percentage = Math.round((data.totals.expense / data.totals.income) * 100);
            } else {
                data.percentage = -1;
            }

        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalIncome: data.totals.income,
                totalExpense: data.totals.expense,
                percentage: data.percentage
            };
        }
    }


})(); // IIFE

// UI Module
var UIController = (function () {

    var DOMStrings = {
        inputDescription: '.add-description',
        inputValue: '.add-value',
        income: '#income',
        expense: '#expense',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetValue: '.budget-value',
        budgetIncomeValue: '.budget-income--value',
        budgetExpenseValue: '.budget-expenses--value',
        budgetExpensePerentage: '.budget-expenses--percentage'
    }
    return {
        getInput: function (idNme) {
            return {
                idName: idNme,
                descriptionValue: document.querySelector(DOMStrings.inputDescription).value,
                addValue: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },
        addItemsToList: function (obj, type) {
            var html, newHTML, element;
            // Create HTML strings  with placeholder text

            if (type == 'income') {
                element = DOMStrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix">' +
                    '<div class="item-value">+ %value%</div><div class="item-delete"><button class="item-delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                    '</div></div></div>'
            } else if (type == 'expense') {
                element = DOMStrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix">' +
                    '<div class="item-value">- %value%</div><div class="item-percentage">21%</div><div class="item-delete">' +
                    '<button class="item-delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            // replace place holder text with actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);

            // insert html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

        },

        clearInputFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue);

            // Calling array slice() 
            fieldsArr = Array.prototype.slice.call(fields);

            // Using for each we are cheking all the fields in the fieldarray
            fieldsArr.forEach(function (current, index, array) {
                current.value = '';
            });
            fieldsArr[0].focus();
        },

        displayBudget: function (obj) {
            document.querySelector(DOMStrings.budgetValue).textContent = '+ ' + obj.budget;
            document.querySelector(DOMStrings.budgetIncomeValue).textContent = '+ ' + obj.totalIncome;
            document.querySelector(DOMStrings.budgetExpenseValue).textContent = '- ' + obj.totalExpense;

            if (obj.percentage > 0 && obj.percentage <= 100) {
                document.querySelector(DOMStrings.budgetExpensePerentage).textContent = obj.percentage + " %";
            } else {
                document.querySelector(DOMStrings.budgetExpensePerentage).textContent = "---";
            }

            //    document.querySelector(DOMStrings)
        },

        getDOMStrings: function () {
            return DOMStrings;
        }
    }

})();


//Contoller Module Global App Controller    
var controller = (function (budgetCtrl, UICtrl) {

    let setupEventListener = function () {

        let DOMStr = UIController.getDOMStrings();

        document.querySelector(DOMStr.income).addEventListener('click', ctrlAddItem);
        document.querySelector(DOMStr.expense).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function (evnt) {

            if (evnt.keyCode === 13) {
                //ctrlAddItem();
                alert("Please Press '+' or '-' to calculate!!");
            }
            // if (evnt.keyCode === 107) {
            //     ctrlAddItem('income');
            // } else if(evnt.keyCode === 109){
            //     ctrlAddItem('expense');
            // } else {
            //     alert("Please Press '+' or '-' to calculate!!");
            // }
        });
    };

    var updateBudget = function () {
        // 1. Calculate the Budget
        budgetController.calculateBudget();

        // 2. Return the budget 
        var budget = budgetController.getBudget();

        // . Display the Budget on UI
        UIController.displayBudget(budget);
    }
    function ctrlAddItem() {
        var input, newItem;
        // 1. Get input data
        input = UIController.getInput(this.id); // id of add or minus

        if (input.descriptionValue !== "" && !isNaN(input.addValue) && input.addValue > 0) {

            // 2. Add item to the Budget Controller
            newItem = budgetController.addItem(input.idName, input.descriptionValue, input.addValue);
            budgetController.getValue();
            // 3. Add item to the UI Controller

            UIController.addItemsToList(newItem, input.idName);

            // 4. CLearing Fields
            UIController.clearInputFields();

            // 5. Calculate and Update the Budget
            updateBudget();

        } else {
            alert("Description Field is empty or Value is Zero..!!");
        }
    }

    return {
        init: function () {
            console.log("App started");
            UIController.displayBudget({
                budget: 0,
                totalIncome: 0,
                totalExpense: 0,
                percentage: 0
            });
            setupEventListener();
        }
    }

})(budgetController, UIController);


controller.init();