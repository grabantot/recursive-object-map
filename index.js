function map(obj, mapper, objs=new Map()) {
  let mapped = objs.get(obj)
  if (mapped) return mapped
  mapped = mapper(obj)

}

module.exports = map