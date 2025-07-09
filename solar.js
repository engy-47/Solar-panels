document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn-brand, .btn-outline-brand').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 400);
      });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
      const callBtn = document.querySelector(".btn-brand");
      if (callBtn) {
        callBtn.addEventListener("click", () => {
          alert("Dialling 07745593882 …");
        });
      }
    });
      const testimonials = [
    {
      text: "Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
      name: "Resky Fernanda",
      role: "Product Designer at Tokopedia",
      img: "EDITED-27 - Copy 1.png"
    },
    {
      text: "WOC helped me land my dream job! The content is very relevant and updated, and the instructors are super friendly.",
      name: "Anna Wijaya",
      role: "UX Designer at Gojek",
      img: "EDITED-27 - Copy 1.png"
    },
    {
      text: "I really enjoyed the community and support. WOC makes learning easy and practical.",
      name: "Michael Chandra",
      role: "Frontend Developer at Grab",
      img: "EDITED-27 - Copy 1.png"
    },
    {
      text: "Thanks to WOC, I was able to shift careers into tech. The course structure is very beginner-friendly!",
      name: "Siti Nurlaila",
      role: "Junior Web Developer",
      img: "EDITED-27 - Copy 1.png"
    }
  ];

  let current = 0;

  const textEl = document.querySelector(".testimonial-text");
  const nameEl = document.querySelector(".testimonial-author-name");
  const roleEl = document.querySelector(".testimonial-author .text-muted");
  const imgEl = document.querySelector(".testimonial-author img");
  const dots = document.querySelectorAll(".testimonial-dot");

  function updateTestimonial(index) {
    const t = testimonials[index];
    textEl.textContent = `“${t.text}”`;
    nameEl.textContent = t.name;
    roleEl.textContent = t.role;
    imgEl.src = t.img;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  document.querySelector(".testimonial-controls button:nth-child(1)").addEventListener("click", () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(current);
  });

  document.querySelector(".testimonial-controls button:nth-child(2)").addEventListener("click", () => {
    current = (current + 1) % testimonials.length;
    updateTestimonial(current);
  });

  updateTestimonial(current);