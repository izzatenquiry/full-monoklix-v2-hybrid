/**
 * Centralized configuration for Proxy Servers.
 * Edit this list to add or remove servers for the entire application.
 */

export const PROXY_SERVER_URLS = [
    'https://s1.monoklix.com',
    'https://s2.monoklix.com',
    'https://s3.monoklix.com',
    'https://s4.monoklix.com',
    'https://s5.monoklix.com',
    'https://s6.monoklix.com',
    'https://s7.monoklix.com',
    'https://s8.monoklix.com',
    'https://s9.monoklix.com',
    'https://s10.monoklix.com'
];

/**
 * Helper to generate structured server objects for UI components (Dashboards, etc).
 * Returns array of { id, name, url }
 */
export const UI_SERVER_LIST = PROXY_SERVER_URLS.map((url, index) => {
    const id = `s${index + 1}`;
    let name = `Server S${index + 1}`;

    // Label S1 and S6 for iOS users
    if (id === 's1' || id === 's6') {
        name += ' (iOS)';
    }

    return {
        id,
        name,
        url
    };
});