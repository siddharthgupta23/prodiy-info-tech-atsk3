const bdr = document.getElementById('bdr');
const cls = document.querySelectorAll('.cl');
const message = document.getElementById('meg');
const rtn = document.getElementById('rn');

let cp = 'X';
let g = true;
let e = ['', '', '', '', '', '', '', '', ''];

const cw = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function khc(event) {
  const cl = event.target;
  const ie = parseInt(cl.getAttribute('data-index'));

  if (e[ie] === '' && g) {
    cl.textContent = cp;
    e[ie] = cp;
   
    tPla();
     
    
    
  }
 
 cwn();
  
 
}

function tPla() {
  cp = cp === 'X' ? 'O' :'X';
  message.textContent = `${cp}'s turn`;
}

function cwn() {
  for (let i = 0; i < cw.length; i++) {
    const [a, b, c] = cw[i];
    if (e[a] !== '' && e[a] === e[b] && e[a] === e[c]) {
      message.textContent = `${cp}  loses`;
      g = false;
      break;
    }
  }
  if (!e.includes('') && g) {
    message.textContent = 'It\'s a draw!';
    g = false;
  }
}

function l() {
  e = ['', '', '', '', '', '', '', '', ''];
  cp = 'X';
  g = true;
  message.textContent = `${cp}'s turn`;
  cls.forEach(cl => cl.textContent = '');
}

cls.forEach(cl => cl.addEventListener('click', khc));
rtn.addEventListener('click', l);
