import {browser, element, by, Key} from 'protractor';
import {expectToExist} from '@angular/cdk/testing/private/e2e';


describe('MDC-based slide-toggle', () => {
  const getInput = () => element(by.css('#normal-slide-toggle input'));
  const getNormalToggle = () => element(by.css('#normal-slide-toggle'));

  beforeEach(async () => await browser.get('mdc-slide-toggle'));

  it('should render a slide-toggle', async () => {
    await expectToExist('mat-slide-toggle');
  });

  it('should change the checked state on click', async () => {
    const inputEl = getInput();

    expect(await inputEl.getAttribute('checked'))
      .toBeFalsy('Expect slide-toggle to be unchecked');

    await getNormalToggle().click();

    expect(await inputEl.getAttribute('checked'))
      .toBeTruthy('Expect slide-toggle to be checked');
  });

  it('should change the checked state on click', async () => {
    const inputEl = getInput();

    expect(await inputEl.getAttribute('checked'))
      .toBeFalsy('Expect slide-toggle to be unchecked');

    await getNormalToggle().click();

    expect(await inputEl.getAttribute('checked'))
      .toBeTruthy('Expect slide-toggle to be checked');
  });

  it('should not change the checked state on click when disabled', async () => {
    const inputEl = getInput();

    expect(await inputEl.getAttribute('checked'))
      .toBeFalsy('Expect slide-toggle to be unchecked');

    await element(by.css('#disabled-slide-toggle')).click();

    expect(await inputEl.getAttribute('checked'))
      .toBeFalsy('Expect slide-toggle to be unchecked');
  });

  it('should move the thumb on state change', async () => {
    const slideToggleEl = getNormalToggle();
    const thumbEl = element(by.css('#normal-slide-toggle .mdc-switch__thumb-underlay'));
    const previousPosition = await thumbEl.getLocation();

    await slideToggleEl.click();

    const position = await thumbEl.getLocation();

    expect(position.x).not.toBe(previousPosition.x);
  });

  it('should toggle the slide-toggle on space key', async () => {
    const inputEl = getInput();

    expect(await inputEl.getAttribute('checked'))
      .toBeFalsy('Expect slide-toggle to be unchecked');

    await inputEl.sendKeys(Key.SPACE);

    expect(await inputEl.getAttribute('checked'))
      .toBeTruthy('Expect slide-toggle to be checked');
  });

});
