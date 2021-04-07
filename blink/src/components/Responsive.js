export const screenSize = {
    mobile: 426,
    tablet: 780,
    desktopSmall: 1280,
    desktopLarge: 1920,
};

export const mediaQueries = {
    mobileQuery: `(max-width: ${screenSize.mobile}px)`,
    tabletQuery: `(min-width: ${screenSize.mobile}px) and (max-width: ${screenSize.tablet}px)`,
    desktopQuery: `(min-width: ${screenSize.mobile}px) and (max-width: ${screenSize.desktopSmall}px)`,
    desktopLargeQuery: `(min-width: ${screenSize.desktopSmall}px)`,
};