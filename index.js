module.exports = function InspectForceZoom(mod) {
  mod.hook('C_REQUEST_USER_PAPERDOLL_INFO', 3, (event) => { return event.zoom = true; });
};
