describe('basic', function() {
  describe('truthy/falsy', function() {
    it("", function() {
      expect('').toThrow()
    });

    it("", function() {
      expect(0).toThrow();
    });

    it("", function() {
      expect('0').toThrow();
    });

    it("", function() {
      expect('false').toThrow();
    });

    it("", function() {
      expect(false).toThrow();
    });

    it("", function() {
      expect(undefined).toThrow();
    });

    it("", function() {
      expect(null).toThrow();
    });

    it("", function() {
      expect(null == undefined).toThrow();
    });

    it("", function() {
      expect({}).toThrow();
    });
  });

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
    function isObject(obj) {
    }

    it("", function() {
      expect(isObject(null)).toThrow();
    });

    it("", function() {
      expect(isObject(undefined)).toThrow();
    });

    it("", function() {
      expect(isObject({})).toThrow();
    });

    it("", function() {
      expect(isObject('')).toThrow();
    });

    it("", function() {
      expect(isObject(1)).toThrow();
    });
  });
});