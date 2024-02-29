const heading = document.querySelector('#heading');

heading.addEventListener('click', () => {
    const keyframes = {
        color: ['transparent', '#fff'],
        backgroundPosition: ['100% 0', '0 0'],
    };
    
    const options =  {
        duration: 1000,
        easing: 'ease',
    };
    
    heading.animate(keyframes, options);    
});
//-----------------------------------------------------

const button = document.querySelector('.button');

button.addEventListener('click', () => {
    const keyframes = {
        opacity: [0, 1],
    };

    const options = {
        duration: 500,
        easing: 'linear',
    };

    const animation = button.animate(keyframes, options);
    animation.onfinish = () => {
    console.log('Animation completed!');
    }
});
//-----------------------------------------------------

const footer = document.getElementById('footer');

const keyframes = {
    borderRadius: [
        `20% 50% 50% 70%/50% 50% 70% 50%`,
        `50% 20% 50% 50%/40% 40% 60% 60%`,
        `50% 40% 20% 40%/40% 50% 50% 80%`,
        `50% 50% 50% 20%/40% 40% 60% 60%`,
    ],
};

const options = {
    duration: 8000,
    direction: 'alternate',
    iterations: 'Infinity',
};

footer.animate(keyframes, options);






