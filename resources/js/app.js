import './bootstrap';
import { enforceMaxLength } from './helper';
import { formatDate } from './helper';
import { formatAmount } from './helper';

document.addEventListener("DOMContentLoaded", function() {
    // Default date to today (YYYY-MM-DD)
    (function setToday() {
        const el = document.getElementById('expenseDate');
        if (!el) return;

        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        el.value = `${yyyy}-${mm}-${dd}`;
    })();

    const expenseForm = document.getElementById("expenseForm");
    const expensesContainer = document.getElementById("expensesContainer");
    const emptyStateInitCard = document.getElementById("emptyStateInitCard"); 
    const offcanvasEl = document.getElementById("addExpenseOffcanvas");
    
    const offcanvas = offcanvasEl ? new bootstrap.Offcanvas(offcanvasEl) : null;

    // SUBMIT FORM
    expenseForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const dateInput = document.getElementById("expenseDate");
        const categoryInput = document.getElementById("expenseCategory");
        const paymentInput = document.getElementById("expensePayment");
        const amountInput = document.getElementById("expenseAmount");
        const tagsInput = document.getElementById("expenseTags");
        const noteInput = document.getElementById("expenseNote");

        let isValid = true;

        // Reset previous validation states
        [dateInput, categoryInput, paymentInput, amountInput].forEach(input => {
            input.classList.remove("is-invalid");
        });

        // Validation
        if (!dateInput.value) {
            dateInput.classList.add("is-invalid");
            isValid = false;
        } 
        if (!categoryInput.value || categoryInput.selectedIndex === 0) {
            categoryInput.classList.add("is-invalid");
            isValid = false;
        }
        if (!paymentInput.value || paymentInput.selectedIndex === 0) {
            paymentInput.classList.add("is-invalid");
            isValid = false;
        }
        if (!amountInput.value || amountInput.selectedIndex === 0) {
            amountInput.classList.add("is-invalid");
            isValid = false;
        }

        if (!isValid) {
            return; // Stop here if validation fails
        }

        const newExpense = {
            date: dateInput.value,
            category: categoryInput.value,
            payment: paymentInput.value,
            amount: amountInput.value,
            tags: tagsInput.value,
            note: noteInput.value,
        };

        let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
        expenses.push(newExpense);
        localStorage.setItem("expenses", JSON.stringify(expenses));

        loadExpenses();

        // Clear everything except the date
        categoryInput.value = "Choose category...";
        paymentInput.value = "Choose method...";
        tagsInput.value = "";
        amountInput.value = "";
        noteInput.value = "";

        if (offcanvas) {
            offcanvas.hide();
        }
    });


    // LOAD UI 
    function loadExpenses() {
        if (!expensesContainer) return;
    
        expensesContainer.innerHTML = "";
        let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

        if (expenses.length === 0) {
            if (emptyStateInitCard) emptyStateInitCard.classList.remove("d-none");
            if (expensesContainer) expensesContainer.classList.add("d-none");
            return;
        }

        if (emptyStateInitCard) emptyStateInitCard.classList.add("d-none");
        if (expensesContainer) expensesContainer.classList.remove("d-none");

        expenses.forEach(exp => {
            const col = document.createElement("div");

            const formattedDate = formatDate(exp.date);
            const formattedAmount = formatAmount(exp.amount);

            col.className = "col-12 col-md-6 col-lg-3 mb-3 fade-in";
            col.innerHTML = `
                <div class="card shadow-sm border-0 rounded-3 h-100">
                    <div class="card-body p-3">
                        <div class="row align-items-center mb-3">
                            <div class="col-6">
                                <span class="badge bg-primary bg-gradient text-white px-3 py-2 fs-6 rounded-pill">
                                <i class="bi bi-tag me-1"></i> ${exp.category}
                                </span>
                                <div class="text-muted small mt-2">
                                <i class="bi bi-calendar-event me-1"></i> ${formattedDate}
                                </div>
                            </div>
                            <div class="col-6 text-end">
                                <h4 class="fw-bold text-success mb-1">${formattedAmount}</h4>
                                <div class="text-dark small">
                                <i class="bi bi-credit-card me-1 text-secondary"></i>
                                <strong>${exp.payment}</strong>
                                </div>
                            </div>
                        </div>
                        ${exp.note 
                        ? `<div class="alert alert-light border-start border-3 border-primary py-2 px-3 small mb-0">
                                <i class="bi bi-stickies me-2"></i>${exp.note}
                            </div>` 
                        :  `<div class="alert alert-light border-start border-3 border-secondary py-2 px-3 small mb-0">
                                <i class="bi bi-stickies me-2"></i>---
                            </div>` 
                        }
                    </div>
                </div>
            `;
            expensesContainer.appendChild(col);
        });

    }

    // LIMITER USER REQUEST
    ["expenseDate", "expenseCategory", "expensePayment", "expenseTags", "expenseAmount", "expenseNote"].forEach(id => {
        const el = document.getElementById(id);
        if (el) enforceMaxLength(el, 80);
    });

    // NOTE COUNTER UI
    const noteInput = document.getElementById("expenseNote");
    const noteCounter = document.getElementById("noteCounter");

    if (noteInput && noteCounter) {
        noteInput.addEventListener("input", function () {
            let length = this.value.length;
            if (length > 35) {
                this.value = this.value.substring(0, 35);
                length = 35;
            }
            noteCounter.textContent = `${length}/35`;
        });
    }

    // LOAD ON INITIAL PAGE
    loadExpenses();
});

