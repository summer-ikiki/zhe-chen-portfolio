if (window.lucide) {
  window.lucide.createIcons();
}

const copyButtons = document.querySelectorAll("[data-copy-target]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.getAttribute("data-copy-target");
    const target = document.getElementById(targetId);
    if (!target) return;

    const text = target.textContent.trim();
    const defaultLabel = button.innerHTML;

    try {
      await navigator.clipboard.writeText(text);
      button.innerHTML = '<i data-lucide="check"></i> 已复制';
    } catch {
      button.innerHTML = '<i data-lucide="copy-x"></i> 复制失败';
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }

    window.setTimeout(() => {
      button.innerHTML = defaultLabel;
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 1600);
  });
});
