describe('scope', function() {
  describe('warmup', function() {

    (function() {
      baz = 5;
      var bar = 10;
    })();

    it("", function() {
      expect(baz).toThrow();
    });

    it("", function() {
      expect(window.bar).toThrow();
    });
  });
});