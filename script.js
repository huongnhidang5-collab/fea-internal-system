let isAdmin = true; // demo
let members = [];

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.style.display = "block";
  toast.style.background =
    type === "error" ? "#c0392b" :
    type === "warning" ? "#f39c12" : "#2ecc71";
  
  setTimeout(() => toast.style.display = "none", 2500);
}

function login() {
  document.getElementById("login").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
  showToast("Đăng nhập thành công");
}

function logout() {
  location.reload();
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function addMember() {
  if (!isAdmin) {
    showToast("Bạn không có quyền thêm nhân sự", "error");
    return;
  }
  const name = document.getElementById("name").value;
  if (!name) {
    showToast("Vui lòng nhập họ tên", "warning");
    return;
  }
  members.push(name);
  document.getElementById("memberList").innerHTML += `<li>${name}</li>`;
  showToast("Thêm nhân sự thành công");
}

function markAttendance() {
  showToast("Điểm danh thành công");
}

function addScore() {
  if (!isAdmin) {
    showToast("Không có quyền chấm điểm", "error");
    return;
  }
  showToast("Đã lưu điểm");
}

function addReport() {
  showToast("Gửi báo cáo thành công");
}

function addFile() {
  showToast("Đã lưu tài liệu");
}
