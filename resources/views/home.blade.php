<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    
    {{-- head --}}
    <x-app.head />

    <body class="antialiased" id="main-bg">

        <x-navbar />

        <!-- Offcanvas Side Form -->
        <x-side-form />

        <!-- Empty State -->
        <div id="emptyState" class="card shadow-sm border-dashed h-100 d-flex align-items-center justify-content-center mt-5 width-50" style="cursor:pointer;" data-bs-toggle="offcanvas" data-bs-target="#addExpenseOffcanvas" aria-controls="addExpenseOffcanvas">
            <div class="card-body text-center">
                <div class="display-1 text-muted">+</div>
                <h5 class="card-title mt-3">Add Your First Expense</h5>
                <p class="text-muted">Click here to start tracking your expenses</p>
            </div>
        </div>

        <!-- Expenses Container (initially hidden) -->
        <div id="expensesContainer" class="row d-none"></div>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </body>
</html>
