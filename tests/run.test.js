const { describe, test, expect } = require('@jest/globals');

describe('Heavens Above Project', () => {
  test('package.json should have required dependencies', () => {
    const packageJson = require('../package.json');
    
    expect(packageJson.dependencies).toHaveProperty('cheerio');
    expect(packageJson.dependencies).toHaveProperty('request');
    expect(packageJson.scripts).toHaveProperty('start');
  });

  test('main files should exist', () => {
    const fs = require('fs');
    
    expect(fs.existsSync('./run.js')).toBe(true);
    expect(fs.existsSync('./package.json')).toBe(true);
  });

  test('basic math test', () => {
    expect(1 + 1).toBe(2);
  });
});