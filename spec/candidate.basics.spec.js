describe('basic', function() {
  describe('==', function() {
    it("", function() {
      expect('' == '0').toThrow();
    });

    it("", function() {
      expect(0 == '').toThrow();
    });

    it("", function() {
      expect(0 == '0').toThrow();
    });

    it("", function() {
      expect(false == 'false').toThrow();
    });

    it("", function() {
      expect(false == '0').toThrow();
    });

    it("", function() {
      expect(false == undefined).toThrow();
    });

    it("", function() {
      expect(false == null).toThrow();
    });

    it("", function() {
      expect(null == undefined).toThrow();
    });
  });

  describe('check for null/undefined', function() {
    var bar;

    it("", function() {
      expect(bar === null).toThrow();
    });

    it("", function() {
      expect(bar === undefined).toThrow();
    });

    it("", function() {
      expect(typeof bar === 'object').toThrow();
    });

    it("", function() {
      expect(typeof bar === 'undefined').toThrow();
    });
  });

  describe('check for null/undefined', function() {
    var bar = null;

    it("", function() {
      expect(bar === null).toThrow();
    });

    it("", function() {
      expect(bar === undefined).toThrow();
    });

    it("", function() {
      expect(typeof bar === 'object').toThrow();
    });

    it("", function() {
      expect(typeof bar === 'undefined').toThrow();
    });
  });

  describe('is object?', function() {
    function isNotEmptyObject(obj) {}

    it("", function() {
      expect(isNotEmptyObject(null)).toBe(false);
    });

    it("", function() {
      expect(isNotEmptyObject(undefined)).toBe(false);
    });

    it("", function() {
      expect(isNotEmptyObject({})).toBe(true);
    });

    it("", function() {
      expect(isNotEmptyObject('')).toBe(false);
    });

    it("", function() {
      expect(isNotEmptyObject(1)).toBe(false);
    });
  });
});