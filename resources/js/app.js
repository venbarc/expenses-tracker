import './bootstrap';

document.addEventListener("DOMContentLoaded", function() {
    // Default date to today (YYYY-MM-DD)
    (function setToday() {
        const el = document.getElementById('date');
        if (!el) return;

        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        el.value = `${yyyy}-${mm}-${dd}`;
    })();

    const form = document.getElementById("expenseForm");
    const container = document.getElementById("expensesContainer");
    const emptyState = document.getElementById("emptyState"); // This now refers to your card
    const offcanvasEl = document.getElementById("addExpenseOffcanvas");
    
    const offcanvas = offcanvasEl ? new bootstrap.Offcanvas(offcanvasEl) : null;

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const newExpense = {
                date: document.getElementById("date").value,
                category: document.getElementById("expenseCategory").value,
                payment: document.getElementById("expensePayment").value,
                tags: document.getElementById("expenseTags").value,
                amount: document.getElementById("expenseAmount").value,
                note: document.getElementById("expenseNote").value,
            };

            let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
            expenses.push(newExpense);
            localStorage.setItem("expenses", JSON.stringify(expenses));

            loadExpenses();
            form.reset();
            
            if (offcanvas) {
                offcanvas.hide();
            }
        });
    }

    function loadExpenses() {
        if (!container) return;
    
        container.innerHTML = "";
        let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

        if (expenses.length === 0) {
            if (emptyState) emptyState.classList.remove("d-none");
            if (container) container.classList.add("d-none");
            return;
        }

        if (emptyState) emptyState.classList.add("d-none");
        if (container) container.classList.remove("d-none");

        expenses.forEach(exp => {
            const col = document.createElement("div");
            col.className = "col-12 col-md-6 col-lg-3 mb-3";
            col.innerHTML = `
                <div class="card shadow-sm border-0 h-100">
                    <div class="card-body">
                        <h6 class="text-muted small">${exp.date}</h6>
                        <h5 class="fw-bold">${exp.category}</h5>
                        <p class="mb-1"><strong>Payment:</strong> ${exp.payment}</p>
                        <p class="mb-1"><strong>Tags:</strong> ${exp.tags || '-'}</p>
                        <p class="mb-1"><strong>Amount:</strong> ₱${exp.amount}</p>
                        <p class="text-muted small">${exp.note || ''}</p>
                    </div>
                </div>
            `;
            container.appendChild(col);
        });
    }

    // Load expenses on initial page load
    loadExpenses();
});