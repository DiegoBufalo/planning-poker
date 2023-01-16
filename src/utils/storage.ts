



export const clearStorage = () => {
    localStorage.removeItem('BPP-userId')
    localStorage.removeItem('BPP-userName')
    sessionStorage.removeItem('BPP-roomId');
    sessionStorage.removeItem('BPP-isSpectating');
};