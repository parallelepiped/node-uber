function Request(uber) {
  this._uber = uber;
  this.path = 'requests';
}

module.exports = Request;

/**
 *
 * @param query
 * @param callback
 * @returns {*}
 */
Request.prototype.request = function (query, callback) {

  // todo - add validation

  var obj = {
    url        : this.path,
    formData   : query.formData,
    accessToken: query.accessToken
  };
  if (typeof query.leIndex != "undefined")
    obj.leIndex = query.leIndex;

  return this._uber.post(obj, callback);
};

/**
 *
 * @param query
 * @param callback
 * @returns {*}
 */
Request.prototype.details = function (query, callback) {
  if (!query.start_latitude && !query.start_longitude) {
    return callback(new Error('Invalid parameters'));
  }
  var detailsId = "";


  var obj = { url: this.path + '/' + detailsId};
  if (typeof query.leIndex != "undefined")
    obj.leIndex = query.leIndex;
  return this._uber.get(obj, callback);
};
