
# Awesome Types & Type Signatures / Annotations for Ruby


## Type Signatures / Annotations

- [Contracts for Ruby (contracts.ruby) :octocat:](https://github.com/egonSchiele/contracts.ruby), [:gem:](https://rubygems.org/gems/contracts) - a contract is one line of code that you write above a method definition; it validates the arguments to the method, and validates the return value of the method
- [Rubype (Ruby+Type) :octocat:](https://github.com/gogotanaka/Rubype), [:gem:](https://rubygems.org/gems/rubype) - gradual type checking for Ruby
- [Typedocs :octocat:](https://github.com/todesking/typedocs), [:gem:](https://rubygems.org/gems/typedocs) - method type annotations for Ruby
- [Typecheck :octocat:](https://github.com/plexus/typecheck), [:gem:](https://rubygems.org/gems/typecheck) - type checking for Ruby methods 
- [Ruby Type Checker (Rtc) :octocat:](https://github.com/plum-umd/rtc)  
- [Steep - Gradual Typing for Ruby :octocat:](https://github.com/soutaro/steep) 

Upcoming

- [Sorbet](https://sorbet.run) [:gem:](https://rubygems.org/gems/sorbet) - a ruby typechecker from Stripe; [not yet open source but eventually promised after more internal use](https://sorbet.run/talks/StrangeLoop2018) 


## Types

### Bool

- [Bool Type :octocat:](https://github.com/typesigs/safebool) - safebool gem / library - safe bool / boolean type adds Bool(), to_b, parse_bool / to_bool, bool?, false?, true?, true.is_a?(Bool)==true, false.is_a?(Bool)==true, and more 

### Enums / Flags

- [Enum / Flag Types :octocat:](https://github.com/typesigs/enums) - enums library / gem - safe enum / enumeration types - a set of symbolic keys bound to unique integer numbers (incl. bit flags option)

### Bytes / Buffer / (Frozen) String

- [Bytes / Buffer Types :octocat:](https://github.com/typesigs/bytes)


### Records

- [Record Type :octocat:](https://github.com/typesigs/records) - records gem / library - frozen / immutable structs with copy on updates


### Structs


### Typed Arrays / Typed Maps

- [Typed Arrays / Typed Maps :octocat:](https://github.com/s6ruby/safestruct) - safestruct gem / library - safe data structures (array, hash, struct) - say goodbye to null / nil (and maybe) - say hello to zero

### (Algebraic) Data (Union) Types with Variants

- [Data Type :octocat:](https://github.com/typesigs/safedata) - safedata gem / library - safe (algebraic) union data types with (enumerated) variants


### More / Misc Types

- [Types :octocat:](https://github.com/dry-rb/dry-types) - dry-types gem / library - flexible type system with coercions and constraints 




## Ruby 3  

_Ruby 3 Expected for December 2020 (Hopefully) - Planned Next Version After Ruby 2.7 Expected for December 2019_

#### Static Analysis

Ruby 3 static analysis will have four items:

1. Type signature format (`.rbi`) 
2. Level-1 type checking tool 
3. Type signature profiling / prototyping tool 
4. Level-2 type checking tools

![](i/ruby3-static-analysis.png)

![](i/ruby3-static-analysis-1.png)

(Source: [RubyKaigi 2019 Progress Report on Ruby 3 Talk Slides](https://docs.google.com/presentation/d/1z_5JT0-MJySGn6UGrtdafK1oj9kGSO5sGlTtEQJz0JU/view#slide=id.g57cf166414_14_5))


## Python

_Learning from Type Checkers / Signatures / Annotations in Python_

New in Python version 3.5.

- [typing — Support for type hints](https://docs.python.org/3/library/typing.html)

> The typing module supports type hints as specified by PEP 484 and PEP 526.
> The most fundamental support consists of the types `Any`, `Union`, `Tuple`, `Callable`, `TypeVar`, and `Generic`. 
> For full specification please see PEP 484. For a simplified introduction to type hints see PEP 483.

More type checkers / signatures / annotations:

- [mypy - Optional Static Typing for Python](http://mypy-lang.org)
- [Pyre is a performant type checker for python :octocat:](https://github.com/facebook/pyre-check) by Facebook
- [Pyright static type checker for python :octocat:](https://github.com/Microsoft/pyright) by Microsoft
- [Pytype static type analyzer for python :octocat:](https://github.com/google/pytype) by Google



## Crystal

_Ruby with 100 % static types compiled to binaries via LLVM_

> Crystal is statically type checked, so any type errors will be caught early by the compiler rather than fail on runtime. 
> Moreover, and to keep the language clean, Crystal has built-in type inference, so most type annotations are unneeded.

``` crystal
def shout(x)
  # Notice that both Int32 and String respond_to `to_s`
  x.to_s.upcase
end

foo = ENV["FOO"]? || 10

typeof(foo)        #=> (Int32 | String)
typeof(shout(foo)) #=> String
```

(Source: [Crystal Lang - Type System](https://crystal-lang.org/#type-system))



## Meta

**License**

The awesome list is dedicated to the public domain. Use it as you please with no restrictions whatsoever.

**Questions? Comments?**

Send them along to the ruby-talk mailing list. Thanks!
