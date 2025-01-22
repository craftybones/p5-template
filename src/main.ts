import p5 from 'p5';
import mySketch from './sketch';

const elem = document.getElementById('sketch') || undefined;
new p5(mySketch, elem);
