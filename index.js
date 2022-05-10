var myModal = document.getElementById('myModal')
var btn = document.getElementById('btnClick')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})