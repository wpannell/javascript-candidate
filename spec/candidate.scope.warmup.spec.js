describe('scope', function() {
  describe('warmup', function() {

    (function() {
      baz = 5;
      var bar = 10;
    })();

    it("", function() {
      expect(baz).toBe(5);
    });

    it("", function() {
      expect(window.bar).toBeUndefined();
    });
  });
});