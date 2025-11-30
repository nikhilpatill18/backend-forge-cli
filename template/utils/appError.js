class AppError extends Error{
    constructor(message="something went wrong",statusCode,errors=[],stack=""){
        super(message);
        this.statusCode=statusCode;
        this.status=`${statusCode}`.startsWith('4')? 'fail':'error';
        this.success=false;
        this.errors=errors
        if (stack) {
            this.stack = stack
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }
        
        
    }
}


module.exports=AppError;