export function withTimeout(loader, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(loader), timeout);
    });
}
