function figureArea([w, h, W, H]) {
    [a1, a2, a3] = [h * w, H * W, Math.min(h, H) * Math.min(w, W)];
    return a1 + a2 - a3;
}
figureArea(['13', '2', '5', '8']);