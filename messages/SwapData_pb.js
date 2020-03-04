/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var SolidityTypes_pb = require('./SolidityTypes_pb.js');
goog.object.extend(proto, SolidityTypes_pb);
var IssuanceData_pb = require('./IssuanceData_pb.js');
goog.object.extend(proto, IssuanceData_pb);
goog.exportSymbol('proto.SpotSwapCompleteProperties', null, global);
goog.exportSymbol('proto.SpotSwapMakerParameters', null, global);
goog.exportSymbol('proto.SpotSwapProperties', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SpotSwapMakerParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SpotSwapMakerParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SpotSwapMakerParameters.displayName = 'proto.SpotSwapMakerParameters';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SpotSwapProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SpotSwapProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SpotSwapProperties.displayName = 'proto.SpotSwapProperties';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SpotSwapCompleteProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SpotSwapCompleteProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SpotSwapCompleteProperties.displayName = 'proto.SpotSwapCompleteProperties';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SpotSwapMakerParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.SpotSwapMakerParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SpotSwapMakerParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpotSwapMakerParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputtokenaddress: (f = msg.getInputtokenaddress()) && SolidityTypes_pb.address.toObject(includeInstance, f),
    outputtokenaddress: (f = msg.getOutputtokenaddress()) && SolidityTypes_pb.address.toObject(includeInstance, f),
    inputamount: (f = msg.getInputamount()) && SolidityTypes_pb.uint256.toObject(includeInstance, f),
    outputamount: (f = msg.getOutputamount()) && SolidityTypes_pb.uint256.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && SolidityTypes_pb.uint256.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SpotSwapMakerParameters}
 */
proto.SpotSwapMakerParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SpotSwapMakerParameters;
  return proto.SpotSwapMakerParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SpotSwapMakerParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SpotSwapMakerParameters}
 */
proto.SpotSwapMakerParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new SolidityTypes_pb.address;
      reader.readMessage(value,SolidityTypes_pb.address.deserializeBinaryFromReader);
      msg.setInputtokenaddress(value);
      break;
    case 2:
      var value = new SolidityTypes_pb.address;
      reader.readMessage(value,SolidityTypes_pb.address.deserializeBinaryFromReader);
      msg.setOutputtokenaddress(value);
      break;
    case 3:
      var value = new SolidityTypes_pb.uint256;
      reader.readMessage(value,SolidityTypes_pb.uint256.deserializeBinaryFromReader);
      msg.setInputamount(value);
      break;
    case 4:
      var value = new SolidityTypes_pb.uint256;
      reader.readMessage(value,SolidityTypes_pb.uint256.deserializeBinaryFromReader);
      msg.setOutputamount(value);
      break;
    case 5:
      var value = new SolidityTypes_pb.uint256;
      reader.readMessage(value,SolidityTypes_pb.uint256.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SpotSwapMakerParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SpotSwapMakerParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SpotSwapMakerParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpotSwapMakerParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputtokenaddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      SolidityTypes_pb.address.serializeBinaryToWriter
    );
  }
  f = message.getOutputtokenaddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      SolidityTypes_pb.address.serializeBinaryToWriter
    );
  }
  f = message.getInputamount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      SolidityTypes_pb.uint256.serializeBinaryToWriter
    );
  }
  f = message.getOutputamount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      SolidityTypes_pb.uint256.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      SolidityTypes_pb.uint256.serializeBinaryToWriter
    );
  }
};


/**
 * optional solidity.address inputTokenAddress = 1;
 * @return {?proto.solidity.address}
 */
proto.SpotSwapMakerParameters.prototype.getInputtokenaddress = function() {
  return /** @type{?proto.solidity.address} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.address, 1));
};


/** @param {?proto.solidity.address|undefined} value */
proto.SpotSwapMakerParameters.prototype.setInputtokenaddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapMakerParameters.prototype.clearInputtokenaddress = function() {
  this.setInputtokenaddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapMakerParameters.prototype.hasInputtokenaddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional solidity.address outputTokenAddress = 2;
 * @return {?proto.solidity.address}
 */
proto.SpotSwapMakerParameters.prototype.getOutputtokenaddress = function() {
  return /** @type{?proto.solidity.address} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.address, 2));
};


/** @param {?proto.solidity.address|undefined} value */
proto.SpotSwapMakerParameters.prototype.setOutputtokenaddress = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapMakerParameters.prototype.clearOutputtokenaddress = function() {
  this.setOutputtokenaddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapMakerParameters.prototype.hasOutputtokenaddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional solidity.uint256 inputAmount = 3;
 * @return {?proto.solidity.uint256}
 */
proto.SpotSwapMakerParameters.prototype.getInputamount = function() {
  return /** @type{?proto.solidity.uint256} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.uint256, 3));
};


/** @param {?proto.solidity.uint256|undefined} value */
proto.SpotSwapMakerParameters.prototype.setInputamount = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapMakerParameters.prototype.clearInputamount = function() {
  this.setInputamount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapMakerParameters.prototype.hasInputamount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional solidity.uint256 outputAmount = 4;
 * @return {?proto.solidity.uint256}
 */
proto.SpotSwapMakerParameters.prototype.getOutputamount = function() {
  return /** @type{?proto.solidity.uint256} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.uint256, 4));
};


/** @param {?proto.solidity.uint256|undefined} value */
proto.SpotSwapMakerParameters.prototype.setOutputamount = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapMakerParameters.prototype.clearOutputamount = function() {
  this.setOutputamount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapMakerParameters.prototype.hasOutputamount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional solidity.uint256 duration = 5;
 * @return {?proto.solidity.uint256}
 */
proto.SpotSwapMakerParameters.prototype.getDuration = function() {
  return /** @type{?proto.solidity.uint256} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.uint256, 5));
};


/** @param {?proto.solidity.uint256|undefined} value */
proto.SpotSwapMakerParameters.prototype.setDuration = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapMakerParameters.prototype.clearDuration = function() {
  this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapMakerParameters.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SpotSwapProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.SpotSwapProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SpotSwapProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpotSwapProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputtokenaddress: (f = msg.getInputtokenaddress()) && SolidityTypes_pb.address.toObject(includeInstance, f),
    outputtokenaddress: (f = msg.getOutputtokenaddress()) && SolidityTypes_pb.address.toObject(includeInstance, f),
    inputamount: (f = msg.getInputamount()) && SolidityTypes_pb.uint256.toObject(includeInstance, f),
    outputamount: (f = msg.getOutputamount()) && SolidityTypes_pb.uint256.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && SolidityTypes_pb.uint256.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SpotSwapProperties}
 */
proto.SpotSwapProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SpotSwapProperties;
  return proto.SpotSwapProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SpotSwapProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SpotSwapProperties}
 */
proto.SpotSwapProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new SolidityTypes_pb.address;
      reader.readMessage(value,SolidityTypes_pb.address.deserializeBinaryFromReader);
      msg.setInputtokenaddress(value);
      break;
    case 2:
      var value = new SolidityTypes_pb.address;
      reader.readMessage(value,SolidityTypes_pb.address.deserializeBinaryFromReader);
      msg.setOutputtokenaddress(value);
      break;
    case 3:
      var value = new SolidityTypes_pb.uint256;
      reader.readMessage(value,SolidityTypes_pb.uint256.deserializeBinaryFromReader);
      msg.setInputamount(value);
      break;
    case 4:
      var value = new SolidityTypes_pb.uint256;
      reader.readMessage(value,SolidityTypes_pb.uint256.deserializeBinaryFromReader);
      msg.setOutputamount(value);
      break;
    case 5:
      var value = new SolidityTypes_pb.uint256;
      reader.readMessage(value,SolidityTypes_pb.uint256.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SpotSwapProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SpotSwapProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SpotSwapProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpotSwapProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputtokenaddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      SolidityTypes_pb.address.serializeBinaryToWriter
    );
  }
  f = message.getOutputtokenaddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      SolidityTypes_pb.address.serializeBinaryToWriter
    );
  }
  f = message.getInputamount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      SolidityTypes_pb.uint256.serializeBinaryToWriter
    );
  }
  f = message.getOutputamount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      SolidityTypes_pb.uint256.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      SolidityTypes_pb.uint256.serializeBinaryToWriter
    );
  }
};


/**
 * optional solidity.address inputTokenAddress = 1;
 * @return {?proto.solidity.address}
 */
proto.SpotSwapProperties.prototype.getInputtokenaddress = function() {
  return /** @type{?proto.solidity.address} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.address, 1));
};


/** @param {?proto.solidity.address|undefined} value */
proto.SpotSwapProperties.prototype.setInputtokenaddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapProperties.prototype.clearInputtokenaddress = function() {
  this.setInputtokenaddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapProperties.prototype.hasInputtokenaddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional solidity.address outputTokenAddress = 2;
 * @return {?proto.solidity.address}
 */
proto.SpotSwapProperties.prototype.getOutputtokenaddress = function() {
  return /** @type{?proto.solidity.address} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.address, 2));
};


/** @param {?proto.solidity.address|undefined} value */
proto.SpotSwapProperties.prototype.setOutputtokenaddress = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapProperties.prototype.clearOutputtokenaddress = function() {
  this.setOutputtokenaddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapProperties.prototype.hasOutputtokenaddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional solidity.uint256 inputAmount = 3;
 * @return {?proto.solidity.uint256}
 */
proto.SpotSwapProperties.prototype.getInputamount = function() {
  return /** @type{?proto.solidity.uint256} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.uint256, 3));
};


/** @param {?proto.solidity.uint256|undefined} value */
proto.SpotSwapProperties.prototype.setInputamount = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapProperties.prototype.clearInputamount = function() {
  this.setInputamount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapProperties.prototype.hasInputamount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional solidity.uint256 outputAmount = 4;
 * @return {?proto.solidity.uint256}
 */
proto.SpotSwapProperties.prototype.getOutputamount = function() {
  return /** @type{?proto.solidity.uint256} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.uint256, 4));
};


/** @param {?proto.solidity.uint256|undefined} value */
proto.SpotSwapProperties.prototype.setOutputamount = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapProperties.prototype.clearOutputamount = function() {
  this.setOutputamount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapProperties.prototype.hasOutputamount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional solidity.uint256 duration = 5;
 * @return {?proto.solidity.uint256}
 */
proto.SpotSwapProperties.prototype.getDuration = function() {
  return /** @type{?proto.solidity.uint256} */ (
    jspb.Message.getWrapperField(this, SolidityTypes_pb.uint256, 5));
};


/** @param {?proto.solidity.uint256|undefined} value */
proto.SpotSwapProperties.prototype.setDuration = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapProperties.prototype.clearDuration = function() {
  this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapProperties.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SpotSwapCompleteProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.SpotSwapCompleteProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SpotSwapCompleteProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpotSwapCompleteProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuanceproperties: (f = msg.getIssuanceproperties()) && IssuanceData_pb.IssuanceProperties.toObject(includeInstance, f),
    spotswapproperties: (f = msg.getSpotswapproperties()) && proto.SpotSwapProperties.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SpotSwapCompleteProperties}
 */
proto.SpotSwapCompleteProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SpotSwapCompleteProperties;
  return proto.SpotSwapCompleteProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SpotSwapCompleteProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SpotSwapCompleteProperties}
 */
proto.SpotSwapCompleteProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new IssuanceData_pb.IssuanceProperties;
      reader.readMessage(value,IssuanceData_pb.IssuanceProperties.deserializeBinaryFromReader);
      msg.setIssuanceproperties(value);
      break;
    case 2:
      var value = new proto.SpotSwapProperties;
      reader.readMessage(value,proto.SpotSwapProperties.deserializeBinaryFromReader);
      msg.setSpotswapproperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SpotSwapCompleteProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SpotSwapCompleteProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SpotSwapCompleteProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpotSwapCompleteProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuanceproperties();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      IssuanceData_pb.IssuanceProperties.serializeBinaryToWriter
    );
  }
  f = message.getSpotswapproperties();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.SpotSwapProperties.serializeBinaryToWriter
    );
  }
};


/**
 * optional IssuanceProperties issuanceProperties = 1;
 * @return {?proto.IssuanceProperties}
 */
proto.SpotSwapCompleteProperties.prototype.getIssuanceproperties = function() {
  return /** @type{?proto.IssuanceProperties} */ (
    jspb.Message.getWrapperField(this, IssuanceData_pb.IssuanceProperties, 1));
};


/** @param {?proto.IssuanceProperties|undefined} value */
proto.SpotSwapCompleteProperties.prototype.setIssuanceproperties = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapCompleteProperties.prototype.clearIssuanceproperties = function() {
  this.setIssuanceproperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapCompleteProperties.prototype.hasIssuanceproperties = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SpotSwapProperties spotSwapProperties = 2;
 * @return {?proto.SpotSwapProperties}
 */
proto.SpotSwapCompleteProperties.prototype.getSpotswapproperties = function() {
  return /** @type{?proto.SpotSwapProperties} */ (
    jspb.Message.getWrapperField(this, proto.SpotSwapProperties, 2));
};


/** @param {?proto.SpotSwapProperties|undefined} value */
proto.SpotSwapCompleteProperties.prototype.setSpotswapproperties = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.SpotSwapCompleteProperties.prototype.clearSpotswapproperties = function() {
  this.setSpotswapproperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SpotSwapCompleteProperties.prototype.hasSpotswapproperties = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto);