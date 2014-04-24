describe('scope', function() {
  describe('warmup', function() {

    (function() {
      baz = 5;
      var bar = 10;
    })();

    it("", function() {
      expect(baz).toBe();
    });

    it("", function() {
      expect(window.bar).toThrow();
    });
  });
});