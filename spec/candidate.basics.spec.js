describe('basic', function() {
  describe('check for null/undefined', function() {
    var bar;

    it("", function() {
      expect(bar === null).toBe();
    });

    it("", function() {
      expect(bar === undefined).toBe();
    });

    it("", function() {
      expect(typeof bar === 'object').toBe();
    });

    it("", function() {
      expect(typeof bar === 'undefined').toBe();
    });
  });

  describe('check for null/undefined', function() {
    var bar = null;

    it("", function() {
      expect(bar === null).toBe();
    });

    it("", function() {
      expect(bar === undefined).toBe();
    });

    it("", function() {
      expect(typeof bar === 'object').toBe();
    });

    it("", function() {
      expect(typeof bar === 'undefined').toBe();
    });
  });

  describe('is object?', function() {
    function isObject(obj) {
    }

    it("", function() {
      expect(isObject(null)).toBe(false);
    });

    it("", function() {
      expect(isObject(undefined)).toBe(false);
    });

    it("", function() {
      expect(isObject({})).toBe(true);
    });

    it("", function() {
      expect(isObject('')).toBe(false);
    });

    it("", function() {
      expect(isObject(1)).toBe(false);
    });
  });
});