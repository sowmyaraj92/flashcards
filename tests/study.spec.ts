import { test, expect } from '@playwright/test';

test('study flow', async ({ page }) => {
  await page.goto('/');

  // 1. Navigate to the study mode
  await page.getByRole('link', { name: 'Study Mode' }).click();
  await expect(page).toHaveURL('/study');
  await expect(page.getByRole('heading', { name: 'Select a Category' })).toBeVisible();

  // 2. Select a category
  await page.getByRole('link', { name: 'animals' }).click();
  await expect(page).toHaveURL('/study/animals');
  await expect(page.getByRole('heading', { name: 'Studying: animals' })).toBeVisible();

  // 3. Interact with the flashcard
  await expect(page.getByText('Card 1 of 3')).toBeVisible();
  const flashcard = page.locator('.flashcard');
  
  // Check front of the card
  await expect(flashcard.locator('.flashcard-front')).toContainText('en katt');
  await expect(flashcard.locator('.flashcard-back')).toContainText('a cat');

  // Flip the card
  await flashcard.click();
  await expect(flashcard).toHaveClass(/is-flipped/);

  // 4. Navigate to the next card
  await page.getByRole('button', { name: 'Next Card' }).click();
  await expect(page.getByText('Card 2 of 3')).toBeVisible();

  // Check the second card
  const secondFlashcard = page.locator('.flashcard');
  await expect(secondFlashcard.locator('.flashcard-front')).toContainText('en hund');
  await expect(secondFlashcard.locator('.flashcard-back')).toContainText('a dog');

  // 5. Go back to categories
  await page.getByRole('link', { name: 'Back to Categories' }).click();
  await expect(page).toHaveURL('/study');

  // 6. Go back to home
  await page.getByRole('link', { name: 'Back to Home' }).click();
  await expect(page).toHaveURL('/');
}); 