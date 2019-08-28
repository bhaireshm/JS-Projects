
// Data Module
var budgetController = (function () {

    var Expense = function (id, description, value) { // Function Constructor
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function (totalIncome) {

        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPerctg = function () {
        return this.percentage;
    }

    var Income = function (id, description, value) { // Function Constructor
        this.id = id;
        this.description = description;
        this.value = value;
    };

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
    };

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

        deleteItem: function (type, id) {
            var ids, index;
            // id = 6
            // data.allItems[type][id]
            // ids = [ 1,2,3,6,8 ]
            // index = 3
            // console.log(index+","+ type+","+ids+","+id)

            ids = data.allItems[type].map(function (current) { // 
                return current.id;
            });
            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
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

        calculatePercentages: function () {

            data.allItems.expense.forEach(function (current) {
                current.calcPercentage(data.totals.income); // in DS
            });
        },

        getPercentages: function () {

            var allPercentages = data.allItems.expense.map(function (current) {
                return current.getPerctg();
            });
            return allPercentages;
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
        budgetExpensePerentage: '.budget-expenses--percentage',
        ItemListContainer: '.container',
        percentageLable: '.item-percentage',
        dateLabel: '.budget-title--month'
    };

    var formatNumber = function (num, type) {
        var numSplit, integer, decimal;

        num = Math.abs(num);
        num = num.toFixed(2);
        numSplit = num.split('.');

        integer = numSplit[0];
        decimal = numSplit[1];

        if (integer.length > 3) {
            integer = integer.substr(0, integer.length - 3) + "," + integer.substr(integer.length - 3, 3);
        }

        return (type == 'expense' ? '- ' : '+ ') + integer + "." + decimal;
    };

    var nodeListForEach = function (perLabel, callbackFunc) {
        for (var i = 0; i < perLabel.length; i++) {
            callbackFunc(perLabel[i], i);
        }
    };

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
                    '<div class="item-value">%value%</div><div class="item-delete"><button class="item-delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                    '</div></div></div>'
            } else if (type == 'expense') {
                element = DOMStrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix">' +
                    '<div class="item-value">   %value%</div><div class="item-percentage">21%</div><div class="item-delete">' +
                    '<button class="item-delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            // replace place holder text with actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', formatNumber(obj.value, type));

            // insert html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

        },

        deleteItemFromList: function (contanerId) {
            var ele = document.getElementById(contanerId);
            ele.parentNode.removeChild(ele);
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
            var type;
            obj.budget >= 0 ? type = "income" : type = 'expense';

            document.querySelector(DOMStrings.budgetValue).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.budgetIncomeValue).textContent = formatNumber(obj.totalIncome, 'income');
            document.querySelector(DOMStrings.budgetExpenseValue).textContent = formatNumber(obj.totalExpense, 'expense');

            if (obj.percentage > 0 && obj.percentage <= 100) {
                document.querySelector(DOMStrings.budgetExpensePerentage).textContent = obj.percentage + " %";
            } else {
                document.querySelector(DOMStrings.budgetExpensePerentage).textContent = "---";
            }
        },

        displayPercentages: function (percenrtages) {

            var perLabel = document.querySelectorAll(DOMStrings.percentageLable);

            nodeListForEach(perLabel, function (current, index) {
                if (percenrtages[index] > 0) {
                    current.textContent = percenrtages[index] + "%";
                } else {
                    current.textContent = "--";
                }
            });
        },

        displayDate: function () {
            var now, months, monthNum, year;
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            now = new Date();
            monthNum = now.getMonth();
            year = now.getFullYear();

            document.querySelector(DOMStrings.dateLabel).textContent = " - " + months[monthNum] + " " + year;
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
        document.querySelector(DOMStr.expense).addEventListener('click', ctrlAddItem);

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

        document.querySelector(DOMStr.ItemListContainer).addEventListener('click', ctrDeleteItem);

    };

    var updateBudget = function () {
        // 1. Calculate the Budget
        budgetController.calculateBudget();

        // 2. Return the budget 
        var budget = budgetController.getBudget();

        // . Display the Budget on UI
        UIController.displayBudget(budget);
    };

    var updatePercentages = function () {
        // 1 . Calulate percentages 
        budgetController.calculatePercentages();

        // 2. read percentages from the budget controller
        var perc = budgetController.getPercentages();

        // 3. UPdate the UI with new percentages
        UIController.displayPercentages(perc);

    };

    var ctrlAddItem = function () {
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

            // 6. calculate and update percentages
            updatePercentages();


        } else {
            alert("Description Field is empty or Value is Zero..!!");
        }
    };

    var ctrDeleteItem = function (evnt) {
        var itemId, splitId, type, id;

        itemId = (evnt.target.parentNode.parentNode.parentNode.parentNode.id);

        if (itemId) {
            // Income-0
            splitId = itemId.split('-'); // Splits and stores in array type
            type = splitId[0];
            id = parseInt(splitId[1]);

            // 1. Delete item from data structure 
            budgetController.deleteItem(type, id);

            // 2. delete item from UI
            UIController.deleteItemFromList(itemId);

            // 3. Update the Budget and show in UI 
            updateBudget();

            // 4. calculate and update percentages
            updatePercentages();
        }
    };

    return {
        init: function () {
            console.log("App started");
            UIController.displayDate(); // Select The current Month and Year
            UIController.displayBudget({ // 
                budget: 0,
                totalIncome: 0,
                totalExpense: 0,
                percentage: 0
            });
            setupEventListener();
        }
    }

})(budgetController, UIController);

controller.init(); // 