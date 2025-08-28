<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    
    {{-- head --}}
    <x-app.head />

    <body class="antialiased" id="main-bg">

        <nav class="navbar navbar-expand-lg shadow-sm py-lg-5 py-4 bg-dark">
            <div class="container-fluid px-lg-5 px-3 d-flex justify-content-between align-items-center">
                <a class="navbar-brand fw-bold text-light" href="#">ExpensesTracker</a>
                <a class="btn btn-outline-light ms-lg-3" href="#">Login</a>
            </div>
        </nav>


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </body>
</html>
