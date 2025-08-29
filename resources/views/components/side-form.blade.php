<div class="offcanvas offcanvas-end fade" tabindex="-1" id="addExpenseOffcanvas" aria-labelledby="addExpenseOffcanvasLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="addExpenseOffcanvasLabel">Add New Expense</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <form id="expenseForm">
            <!-- Date -->
            <div class="mb-3">
                <label for="date" class="form-label">Date</label>
                <input type="date" id="date" class="form-control">
            </div>

            <!-- Category -->
            <div class="mb-3">
                <label for="expenseCategory" class="form-label">Category</label>
                <select class="form-select" id="expenseCategory">
                    <option selected disabled>Choose category...</option>
                    <option>Food</option>
                    <option>Electric Bills</option>
                    <option>Transportation</option>
                    <option>Shopping</option>
                    <option>Entertainment</option>
                    <option>Healthcare</option>
                    <option>Others</option>
                </select>
            </div>

            <!-- Payment Method -->
            <div class="mb-3">
                <label for="expensePayment" class="form-label">Payment Method</label>
                <select class="form-select" id="expensePayment">
                    <option selected disabled>Choose method...</option>
                    <option>Cash</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>E-Wallet</option>
                    <option>Bank Transfer</option>
                    <option>Others</option>
                </select>
            </div>

            <!-- Tags -->
            <div class="mb-3">
                <label for="expenseTags" class="form-label">Tags</label>
                <input type="text" class="form-control" id="expenseTags" placeholder="e.g. lunch, groceries, utilities">
            </div>

            <!-- Amount -->
            <div class="mb-3">
                <label for="expenseAmount" class="form-label">Amount</label>
                <input type="number" class="form-control" id="expenseAmount" placeholder="Enter amount">
            </div>

            <!-- Notes -->
            <div class="mb-3">
                <label for="expenseNote" class="form-label">Note</label>
                <textarea class="form-control" id="expenseNote" rows="3" placeholder="Optional note..."></textarea>
            </div>

            <!-- Submit -->
            <button type="submit" class="btn btn-dark w-100">Save Expense</button>
        </form>
    </div>
</div>