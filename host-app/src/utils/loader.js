/**
 * Loads a Micro Frontend (MFE) component with suspense and a fallback.
 * 
 * @param {React.ComponentType} MFE - The Micro Frontend component to be loaded.
 * @param {string} type - The type or identifier for the MFWrapper to differentiate between various micro frontends.
 * @param {React.ReactNode} [skeleton] - Optional fallback UI to show while the MFE is being loaded. Defaults to "Loading..." if not provided.
 * 
 * @returns {JSX.Element} A React component wrapped in `React.Suspense` and `MFWrapper` with a fallback skeleton.
 */
const loader = (MFE, type, skeleton) => {
    return (
        <React.Suspense fallback={skeleton ? skeleton : "Loading..."}>
            <MFWrapper type={type}>
                <MFE />
            </MFWrapper>
        </React.Suspense>
    );
};


export default loader