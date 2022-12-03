function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    const mouseMove = (e) => {
        let percentage = Math.floor( (e.offsetX / 300) * 100);
        result.textContent = `${percentage}%`;
    }

    gradient.addEventListener('mousemove', mouseMove);
}