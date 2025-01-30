<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Task;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::all();
        return Inertia::render('Tasks/Index',[
            'tasks' => $tasks
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'description' => 'nullable'
        ]);

        Task::create($request->all());
        return redirect()->route('tasks.index');
    }

    public function edit(Task $task)
    {
        return Inertia::render('Tasks/Edit', [
            'task' => $task
        ]);
    }

    public function update(Request $request, Task $task)
    {
        $request->validate([
            'title' => 'required|max:255',
            'description' => 'nullable'
        ]);

        $task->update($request->all());
        return redirect()->route('tasks.index');
    }

    public function delete(Task $task)
    {
        $task->delete();
        return redirect()->route('tasks.index');
    }
}
