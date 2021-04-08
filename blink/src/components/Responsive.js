export const screenSize = {
    mobile: 430,
    tablet: 1027,
    desktopSmall: 1280,
    desktopLarge: 1920,
};

export const mediaQueries = {
    mobileQuery: `(max-width: ${screenSize.mobile}px)`,
    tabletQuery: `(min-width: ${screenSize.mobile}px) and (max-width: ${screenSize.tablet}px)`,
    desktopQuery: `(min-width: ${screenSize.mobile}px)`,
    desktopLargeQuery: `(min-width: ${screenSize.desktopSmall}px)`,
};