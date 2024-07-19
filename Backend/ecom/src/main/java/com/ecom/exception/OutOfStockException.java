package com.ecom.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class OutOfStockException extends RuntimeException {
	public OutOfStockException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

}
