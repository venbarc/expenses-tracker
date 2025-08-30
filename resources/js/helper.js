// max length input in form
export function enforceMaxLength(input, max = 35) {
    input.addEventListener("input", function () {
        if (this.value.length > max) {
            this.value = this.value.substring(0, max);
        }
    });

    input.addEventListener("paste", function (e) {
        e.preventDefault();
        let text = (e.clipboardData || window.clipboardData).getData("text");
        this.value = (this.value + text).substring(0, max);
    });
}

// Format Date to "Month Day, Year"
export function formatDate(dateString) {
    const dateObj = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString('en-US', options);
}

// Format Amount to PHP currency
export function formatAmount(amount) {
    return new Intl.NumberFormat('en-PH', { 
        style: 'currency', 
        currency: 'PHP' 
    }).format(amount);
}

// Swal alert DELETE confirmation 
export function confirmDelete(callback) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won’t be able to recover this expense!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel"
    }).then((result) => {
        if (result.isConfirmed) {
            callback(); // Execute the function passed in

            Swal.fire({
                title: "Deleted!",
                text: "The expense has been deleted.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}