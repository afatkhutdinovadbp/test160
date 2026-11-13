def factorial(n)
  raise ArgumentError, "n must be a non-negative integer" unless n.is_a?(Integer) && n >= 0

  (1..n).reduce(1, :*)
end

if $PROGRAM_NAME == __FILE__
  print "Введите число: "
  n = Integer(gets)
  puts "#{n}! = #{factorial(n)}"
end
