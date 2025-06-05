/**
 * @jest-environment jsdom
 */

describe('menu toggle behavior', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <i id="menu-icon"></i>
      <ul class="nav-links"></ul>
    `;
    jest.resetModules();
    require('./script');
  });

  test('clicking menu icon toggles active class', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('.nav-links');

    expect(navLinks.classList.contains('active')).toBe(false);
    menuIcon.click();
    expect(navLinks.classList.contains('active')).toBe(true);
    menuIcon.click();
    expect(navLinks.classList.contains('active')).toBe(false);
  });
});
