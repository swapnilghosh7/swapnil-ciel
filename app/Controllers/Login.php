<?php namespace App\Controllers;
use CodeIgniter\HTTP\IncomingRequest;

$request = service('request');

class Login extends BaseController
{
	public function index()
	{
        $data['username'] =  $_POST['username'];
        $data['password'] =  $_POST['password'];
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');

        echo json_encode($data);
        
		// print_r ();
	}

	//--------------------------------------------------------------------

}
