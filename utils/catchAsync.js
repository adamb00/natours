module.exports = cathcAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
