const uploadInputs = document.querySelectorAll('input[type="file"]');

    uploadInputs.forEach((input, index) => {
        input.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.getElementById(`image${index + 1}`);
                    img.src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        });
    });