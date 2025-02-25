"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNavigation = exports.getIcon = exports.DEFAULT_ICON = void 0;
const DEFAULT_ICON = 'Archive';
exports.DEFAULT_ICON = DEFAULT_ICON;

const getIcon = icon => {
  const IconMap = {
    MariaDB: 'Sql',
    MySQL: 'Sql',
    Postgres: 'Sql',
    CockroachDB: 'Sql',
    SQLite: 'Sql',
    MicrosoftSQLServer: 'Sql',
    Oracle: 'Sql',
    SAPHana: 'CloudApp',
    MongoDB: 'Archive',
    other: 'Archive'
  };
  return icon && IconMap[icon] ? IconMap[icon] : DEFAULT_ICON;
};

exports.getIcon = getIcon;

const getNavigation = (options, database, admin) => {
  const navigationOption = typeof options.navigation !== 'undefined' ? options.navigation : options.parent;

  if (navigationOption === null || navigationOption === true) {
    return null;
  }

  if (navigationOption === false) {
    return {
      name: null,
      icon: '',
      show: false
    };
  }

  if (navigationOption === undefined || typeof navigationOption === 'string') {
    return {
      name: navigationOption || database.databaseName(),
      icon: getIcon(database.databaseType()),
      show: true
    };
  }

  const {
    name,
    icon, id
  } = navigationOption;
  return {
    name: admin.translateLabel(id? id: name)==id?name:admin.translateLabel(id? id: name)  || null,
    icon: icon || getIcon(database.databaseType()),
    show: true
  };
};

exports.getNavigation = getNavigation;
