import { ensureRxStorageInstanceParamsAreCorrect } from "../../rx-storage-helper.js";
import { DEFAULT_CHECKPOINT_SCHEMA } from "../../rx-schema-helper.js";
import { RX_STORAGE_NAME_MONGODB } from "./mongodb-helper.js";
import { createMongoDBStorageInstance } from "./rx-storage-instance-mongodb.js";
export var RxStorageMongoDBStatics = {
  checkpointSchema: DEFAULT_CHECKPOINT_SCHEMA
};
export var RxStorageMongoDB = /*#__PURE__*/function () {
  function RxStorageMongoDB(databaseSettings) {
    this.name = RX_STORAGE_NAME_MONGODB;
    this.statics = RxStorageMongoDBStatics;
    this.databaseSettings = databaseSettings;
  }
  var _proto = RxStorageMongoDB.prototype;
  _proto.createStorageInstance = function createStorageInstance(params) {
    ensureRxStorageInstanceParamsAreCorrect(params);
    return createMongoDBStorageInstance(this, params, this.databaseSettings);
  };
  return RxStorageMongoDB;
}();
export function getRxStorageMongoDB(databaseSettings) {
  var storage = new RxStorageMongoDB(databaseSettings);
  return storage;
}
//# sourceMappingURL=rx-storage-mongodb.js.map