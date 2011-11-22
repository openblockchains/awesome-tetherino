
var Logger = {
    $msgFrame:  null,
    msgQueue: []        // queue messages before frame exists and document is not ready
};

Logger.appendMsg = function( msg ) {  // private - internal use only
  this.$msgFrame.append( $( "<div>" ).html( msg ) );
  this.$msgFrame.show();
};

Logger.flushMsgQueue = function() { // private - internal use only
  var queue = this.msgQueue;
  this.msgQueue = [];

  for( var i = 0; i < queue.length; ++i )
    this.appendMsg( queue[i] );
};

Logger.logMsg = function( msg ) {
  if( this.$msgFrame )
    this.appendMsg( msg );
  else
    this.msgQueue.push( msg );
};

Logger.logJsError = function( msg, url, line ) {
  this.logMsg( "<span style='color:red;'>** JavaScript Error: </span><span style='color:red;font-weight:bold;'>" +
       msg + "</span> at <span style='color:blue;font-weight:bold;'>" + url + ":" + line + "</span>" );
};

Logger.ready = function() {
    this.$msgFrame = $( "<div id='msgFrame'>" ).css( {
        zIndex: "2147483584",
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        borderBottom: '1px solid black',
        background: 'lightyellow',
        padding: '3px 0',
        font: 'normal 11px Verdana'
    });

    this.$msgFrame.hide();  // only show when at least one message posted
    this.$msgFrame.prependTo( 'body' );

    this.flushMsgQueue();
};

// -----------------------------------------------------

Logger.oldErrorHandler = window.onerror;      // save old error handler

window.onerror = function( msg, url, line ) {     // install new error handler

     Logger.logJsError( msg, url, line );

     if( Logger.oldErrorHandler )
       return Logger.oldErrorHandler( msg, url, line );

     return false;
}

$(document).ajaxError( function( event, request, settings, exception ) {
   Logger.logMsg( "** Ajax Error: " + settings.url + " - " + exception );
});

$(document).ready( $.proxy( Logger.ready, Logger ));