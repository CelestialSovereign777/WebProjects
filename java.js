
document.getElementById('fileUploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var formData = new FormData(this);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('uploadStatus').innerHTML = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('fileUploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var formData = new FormData(this);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('uploadStatus').innerHTML = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
