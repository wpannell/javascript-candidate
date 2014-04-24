describe('scope', function() {
  describe('simple', function() {
    //...
    var foo = "bar";

    function bar() {
      var foo = "baz";

      function baz(foo) {
        foo = "bam";
        bam = "yay";
      }
      baz();
    }

    bar();

    it("", function() {
      expect(foo).toThrow();
    });

    it("", function() {
      expect(bam).toThrow();
    });
  });
});